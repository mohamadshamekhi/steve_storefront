'use client'

type Variant = {
  id: string
  price: number
  quantity: number
  variant_attribute: Array<{
    key: string
    value: string
    label: string
    meta: string
  }>
  warranty: string
}

type ColorSelectorProps = {
  variants: Variant[]
  selectedVariant?: Variant
  onVariantChange?: (variant: Variant) => void
}

const ColorSelector = ({ variants, selectedVariant, onVariantChange }: ColorSelectorProps) => {
  const handleChange = (variant: Variant) => {
    if (onVariantChange) {
      onVariantChange(variant)
    }
  }

  return (
      <div className='flex gap-2 flex-wrap mb-5'>
        {variants.map((variant) => {
          const colorAttr = variant.variant_attribute.find(attr => attr.key === 'رنگ')
          if (!colorAttr) return null

          const isActive = selectedVariant?.id === variant.id
          const colorValue = colorAttr.value
          const colorLabel = colorAttr.label

          return (
            <div key={variant.id}>
              <label
                htmlFor={variant.id}
                className={`block w-6 h-6 rounded-md cursor-pointer border transition
                  ${isActive ? 'border-primary-700 border-2 p-2' : 'border-white'}`}
                style={{ backgroundColor: colorValue }}
                title={colorLabel}
              >
                <input
                  type="radio"
                  id={variant.id}
                  name="variant"
                  value={variant.id}
                  checked={isActive}
                  onChange={() => handleChange(variant)}
                  className="hidden"
                />
              </label>
            </div>
          )
        })}
      </div>
  )
}

export default ColorSelector
