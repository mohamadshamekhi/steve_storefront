import { fetcher } from '@/api';
import ApiKeys from '@steve/api-keys';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useSessionStore } from '../auth';
import { AddToCartPayload, Cart, CartItem, CartResponse, RemoveFromCartPayload } from './cart.types';

type CartStatus = 'idle' | 'loading' | 'error';

interface ICartStore {
    cart: Cart | null;
    items: CartItem[];
    status: CartStatus;
    itemCount: number;
    subtotal: number;
    finalPrice: number;
    isReady: boolean;
    discountCode: string | null;
    discountedSubtotal: number;

    // Actions
    fetchCart: () => Promise<void>;
    addItem: (payload: AddToCartPayload) => Promise<boolean>;
    removeItem: (payload: RemoveFromCartPayload) => Promise<boolean>;
    applyDiscount: (discountCode: string) => Promise<{ success: boolean; message?: string }>;
    clearCart: () => void;

    // Helper
    isAuthenticated: () => boolean;
    getItemQuantity: (productId: string, variantId: string) => number;
}

export const useCartStore = create<ICartStore>()(
    persist(
        (set, get) => ({
            cart: null,
            items: [],
            status: 'idle',
            itemCount: 0,
            subtotal: 0,
            finalPrice: 0,
            isReady: false,
            discountCode: null,
            discountedSubtotal: 0,

            isAuthenticated: () => {
                const authStatus = useSessionStore.getState().status;
                return authStatus === 'authenticated';
            },

            fetchCart: async () => {
                if (!get().isAuthenticated()) {
                    set({
                        cart: null,
                        items: [],
                        status: 'idle',
                        itemCount: 0,
                        subtotal: 0,
                        finalPrice: 0,
                        isReady: false
                    });
                    return;
                }

                set({ status: 'loading' });

                try {
                    const response: CartResponse = await fetcher(ApiKeys.GET_ACTIVE_CART, 'dashboard', 'GET', {
                        requiredAuth: true
                    });

                    if (response?.success && response.data?.cart) {
                        const cart = response.data.cart;
                        const items = cart.items || [];
                        const itemCount = items.reduce((acc, item) => acc + item.Quantity, 0);
                        const summary = items[0]?.summary;

                        set({
                            cart,
                            items,
                            status: 'idle',
                            itemCount,
                            subtotal: summary?.subtotal || cart.subtotal || 0,
                            finalPrice: summary?.final_price || cart.subtotal || 0,
                            isReady: summary?.is_ready ?? true
                        });
                    } else {
                        // Cart is empty
                        set({
                            cart: null,
                            items: [],
                            status: 'idle',
                            itemCount: 0,
                            subtotal: 0,
                            finalPrice: 0,
                            isReady: false
                        });
                    }
                } catch {
                    set({ status: 'error' });
                }
            },

            addItem: async (payload: AddToCartPayload) => {
                if (!get().isAuthenticated()) {
                    return false;
                }

                set({ status: 'loading' });

                try {
                    const response = await fetcher(ApiKeys.ADD_ITEM, 'dashboard', 'POST', {
                        requiredAuth: true,
                        body: payload
                    });

                    if (response?.success) {
                        await get().fetchCart();
                        return true;
                    }

                    set({ status: 'idle' });
                    return false;
                } catch {
                    set({ status: 'error' });
                    return false;
                }
            },

            removeItem: async (payload: RemoveFromCartPayload) => {
                if (!get().isAuthenticated()) {
                    return false;
                }

                set({ status: 'loading' });

                try {
                    const response = await fetcher(ApiKeys.REMOVE_ITEM, 'dashboard', 'POST', {
                        requiredAuth: true,
                        body: payload
                    });

                    if (response?.success) {
                        await get().fetchCart();
                        return true;
                    }

                    set({ status: 'idle' });
                    return false;
                } catch {
                    set({ status: 'error' });
                    return false;
                }
            },

            applyDiscount: async (discountCode: string) => {
                if (!get().isAuthenticated()) {
                    return { success: false, message: 'لطفا وارد حساب کاربری خود شوید' };
                }

                set({ status: 'loading' });

                try {
                    const response = await fetcher(ApiKeys.CALC_CART, 'dashboard', 'POST', {
                        requiredAuth: true,
                        body: { discount_code: discountCode }
                    });

                    if (response?.success && response?.data) {
                        const data = response.data;
                        set({
                            status: 'idle',
                            subtotal: data.subtotal || 0,
                            finalPrice: data.final_price || 0,
                            discountedSubtotal: data.discounted_subtotal || 0,
                            discountCode: discountCode,
                            isReady: data.is_ready ?? true
                        });
                        return { success: true };
                    }

                    set({ status: 'idle' });
                    return { success: false, message: response?.message || 'کد تخفیف نامعتبر است' };
                } catch {
                    set({ status: 'error' });
                    return { success: false, message: 'خطا در اعمال کد تخفیف' };
                }
            },

            clearCart: () => {
                set({
                    cart: null,
                    items: [],
                    status: 'idle',
                    itemCount: 0,
                    subtotal: 0,
                    finalPrice: 0,
                    isReady: false,
                    discountCode: null,
                    discountedSubtotal: 0
                });
            },

            getItemQuantity: (productId: string, variantId: string) => {
                const items = get().items;
                const item = items.find((i) => i.product_id === productId && i.variant_id === variantId);
                return item?.Quantity || 0;
            }
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                cart: state.cart,
                items: state.items,
                itemCount: state.itemCount,
                subtotal: state.subtotal,
                finalPrice: state.finalPrice,
                isReady: state.isReady
            })
        }
    )
);

// Subscribe to auth changes - clear cart when user logs out
if (typeof window !== 'undefined') {
    useSessionStore.subscribe((state, prevState) => {
        // User logged out
        if (prevState.status === 'authenticated' && state.status === 'unauthenticated') {
            useCartStore.getState().clearCart();
        }
        // User logged in
        if (prevState.status !== 'authenticated' && state.status === 'authenticated') {
            useCartStore.getState().fetchCart();
        }
    });

    // Initial fetch if already authenticated
    const initCart = () => {
        const authStatus = useSessionStore.getState().status;
        if (authStatus === 'authenticated') {
            useCartStore.getState().fetchCart();
        }
    };

    // Wait for auth to be ready, then fetch cart
    if (useSessionStore.getState().status === 'loading') {
        const unsubscribe = useSessionStore.subscribe((state) => {
            if (state.status !== 'loading') {
                initCart();
                unsubscribe();
            }
        });
    } else {
        initCart();
    }
}

export * from './cart.types';

