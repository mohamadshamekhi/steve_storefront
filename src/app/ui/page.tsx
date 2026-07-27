'use client';

import BookIcon from '@/components/icons/BookIcon';
import LogoutIcon from '@/components/icons/dashboard/LogoutIcon';
import Badge from '@/components/ui/atoms/Badge/Badge';
import Button from '@/components/ui/atoms/Button/Button';
import Checkbox from '@/components/ui/atoms/Checkbox/Checkbox';
import DropDownItem from '@/components/ui/atoms/DropDownItem/DropDownItem';
import { Radio } from '@/components/ui/atoms/RadioGroup/RadioGroup';
import Switch from '@/components/ui/atoms/Switch/Switch';
import Dropdown from '@/components/ui/molecules/DropDown/DropDown';
import OffCanvas from '@/components/ui/molecules/OffCanvas/OffCanvas';
import RangeSlider from '@/components/ui/molecules/RangeSlider/RangeSlider';
import { Accordion } from '@/components/ui/organisms/CAccordion/CAccordion';
import { Modal } from '@/components/ui/organisms/Modal/CModal';
import ROUTES from '@/constants/routes/routes.constant';
import { useModalStore } from '@/state/stores/modal';
import { useState } from 'react';

const Page = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [menuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [menuOpen2, setIsMenuOpen2] = useState<boolean>(false);

    const toggleMenu = () => setIsMenuOpen(!menuOpen);
    const toggleMenu2 = () => setIsMenuOpen2(!menuOpen2);

    const openModal = useModalStore((s) => s.openModal);
    const closeModal = useModalStore((s) => s.closeModal);
    return (
        <div>
            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>Radio Groups component</h2>
            <hr />
            <div className='space-y-4 p-6'>
                <Radio name='rrrr' defaultValue='44' size='lg'>
                    <Radio.Item value='44' id='4234' label='erwerwr'></Radio.Item>
                    <Radio.Item value='55' id='tt' label='erwerwr'></Radio.Item>
                </Radio>
            </div>

            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>Modals component</h2>
            <hr />
            <div className='space-y-4 p-6'>
                <Button onClick={() => openModal('example-modal')} className='btn btn-primary'>
                    باز کردن مودال
                </Button>

                <Modal modalKey='example-modal' onClose={() => closeModal('example-modal')}>
                    <Modal.Header onClose={() => closeModal('example-modal')}>عنوان مودال</Modal.Header>
                    <Modal.Body>
                        {' '}
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit natus laudantium veniam
                        est consequuntur consectetur deleniti, in tempore et quas illo voluptatem maiores corporis, sit
                        quibusdam soluta nihil, voluptatum iusto reprehenderit totam alias harum cum? Corporis possimus
                        tempora eligendi labore vero, laudantium explicabo eos? Debitis, atque optio expedita architecto
                        porro distinctio vel! Voluptates reiciendis commodi rerum animi dolorum veritatis quas a
                        perspiciatis qui atque voluptatibus amet quod sed, maiores quos tenetur inventore, saepe veniam
                        temporibus ab aut cumque, velit officiis! Velit ab labore ipsum laborum ullam adipisci aliquid
                        praesentium aliquam nesciunt nam laboriosam, eligendi voluptatum perspiciatis quos sed nisi
                        eveniet minima maxime iusto possimus neque est dolores? Deserunt dolorem, ducimus atque velit
                        consequatur temporibus, quisquam veritatis quam, culpa aliquid labore mollitia at dolorum animi
                        maxime aperiam illum? Eum blanditiis nam beatae. Quod, velit dignissimos. Facilis nostrum
                        laudantium, nemo quaerat illo omnis, distinctio eum aut nulla dignissimos itaque eius expedita
                        earum? Amet non corporis nulla reprehenderit eveniet nihil porro odio tenetur distinctio
                        sapiente nobis dicta deleniti commodi iure vitae nostrum totam, laborum assumenda iusto cum quam
                        soluta dolores ipsa delectus. Quam iure culpa eveniet ad nemo? Qui, magnam atque harum
                        praesentium tempore quia fugiat? Accusantium ut iure ipsa similique sit quos, repellat quis et
                        aperiam. Cum quaerat vero odit, ipsum reprehenderit quam provident nemo error laudantium neque
                        deleniti ipsam officiis, quidem unde quisquam, ab debitis vitae adipisci. Libero provident error
                        consequatur perspiciatis facilis laborum rem ratione dignissimos aut id molestiae voluptates
                        ullam, ab excepturi natus consectetur accusamus rerum quasi accusantium nisi tempora obcaecati
                        eos! Totam aliquid itaque, iste laborum expedita dolore, earum culpa perferendis amet reiciendis
                        molestias reprehenderit qui deleniti repudiandae sit a nobis quasi consectetur nostrum est
                        impedit minus, aut eligendi sed! Nesciunt voluptatum aliquam commodi saepe beatae corrupti
                        facere porro obcaecati, culpa, sed harum, expedita sit. Voluptates, animi. Dolore exercitationem
                        aut et. Sunt, excepturi a! Beatae incidunt corporis voluptas at iste laudantium eos cupiditate?
                        Quisquam nulla nemo autem. Numquam, repudiandae voluptates repellat eligendi aperiam sunt magnam
                        deleniti rerum enim eius voluptatibus harum, facilis minima ipsa accusamus minus tenetur
                        voluptatum nobis! Optio quasi amet repellat cumque possimus enim dolorem ullam id nobis
                        distinctio laborum non eius minima omnis a, deserunt voluptas, nam eos molestias! Officiis nobis
                        officia repellendus dolores omnis ullam vero voluptates error totam aliquam! Eveniet eaque
                        consectetur deleniti ut, quo adipisci provident nam nobis architecto dignissimos. Ab saepe
                        voluptas itaque asperiores aut eius. Maxime totam, ipsam saepe explicabo perspiciatis corrupti
                        cumque numquam adipisci iure accusamus accusantium suscipit est delectus non odit architecto et
                        alias ex mollitia fuga impedit nam, soluta doloremque provident. Minus nulla quisquam, harum
                        quia quas ab aut id necessitatibus incidunt ipsam totam accusamus adipisci labore ad officia
                        nobis modi in blanditiis velit obcaecati? Minima dolores placeat esse doloribus corrupti
                        voluptates laborum, vitae, nemo rem soluta saepe ducimus velit delectus pariatur fuga possimus,
                        minus nobis. Aspernatur dolorum reprehenderit dicta odio, vel doloribus eveniet voluptatibus
                        error quae dolores impedit architecto soluta asperiores cumque ducimus obcaecati. Placeat
                        voluptatibus, aut veniam pariatur numquam atque ipsum obcaecati eveniet iure.{' '}
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => closeModal('example-modal')} className='btn btn-outline'>
                            بستن
                        </button>
                        <button className='btn btn-primary'>تأیید</button>
                    </Modal.Footer>
                </Modal>
            </div>

            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>Accordion component</h2>
            <hr />
            <div className='space-y-4 p-6'>
                <Accordion defaultActiveKey='0,2' type='multiple'>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header eventKey='0'>
                            <div>Accordion Item #1</div>
                        </Accordion.Header>
                        <Accordion.Body eventKey='0'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, illo!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header eventKey='1'>Accordion Item #2</Accordion.Header>
                        <Accordion.Body eventKey='1'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, illo!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header eventKey='2'>Accordion Item #3</Accordion.Header>
                        <Accordion.Body eventKey='2'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, illo!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>OffCanvas component </h2>
            <hr />

            <div className='space-y-4 p-6'>
                <Button onClick={toggleMenu}>Menu open</Button>

                <OffCanvas isOpen={menuOpen} onClose={toggleMenu} position='left'>
                    Lorem ipsum dolor sit amet.
                </OffCanvas>
            </div>

            <div className='space-y-4 p-6'>
                <Button onClick={toggleMenu2}>Menu open2</Button>

                <OffCanvas
                    isOpen={menuOpen2}
                    onClose={toggleMenu2}
                    position='right'
                    titleSection={<div>sefesesre</div>}
                >
                    Lorem ipsum dolor sit amet consectetur.
                </OffCanvas>
            </div>
            <h2>range slider component</h2>
            <hr />
            <div className='space-y-4 p-6'>
                <RangeSlider defaultValue={[10, 34]} />
            </div>
            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>switch component </h2>
            <hr />
            <div className='space-y-4 p-6'>
                <Switch size='sm' variant='primary' />
                <Switch size='md' variant='success' />
                <Switch size='lg' variant='secondary' />
                <Switch size='lg' variant='gray' />
                <Switch size='lg' variant='black' />
            </div>

            <Checkbox label='تست' name='test' id='acceptTerms' checked={isChecked} onChange={setIsChecked} />

            <h2 className='bg-gray-400 text-center text-3xl font-bold'>Dropdown component</h2>
            <div className='p-10'>
                <Dropdown label='Options' icon={<BookIcon />}>
                    <DropDownItem label='Settings' icon={<BookIcon />} />

                    <DropDownItem label='Logout' icon={<LogoutIcon />} href={ROUTES.AboutUs} type='link' />
                </Dropdown>
            </div>
            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>Badge component </h2>
            <hr />
            <div className='m-6 flex flex-wrap gap-3'>
                <Badge color='green'>6</Badge>
                <Badge color='blue'>99</Badge>
                <Badge color='light-blue'>100</Badge>
                <Badge color='gray'>30</Badge>
                <Badge color='danger'>4000</Badge>
            </div>
            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>Button component </h2>
            <hr />
            <div className='m-6 flex flex-wrap gap-3'>
                <Button size='lg' iconPosition='start'>
                    ذخیره تغییرات
                </Button>
                <Button size='lg' iconPosition='start' variant='disabled'>
                    ذخیره تغییرات
                </Button>

                <Button variant='fill' color='danger' size='md'>
                    ذخیره تغییرات
                </Button>

                <Button variant='light' color='danger' size='sm'>
                    ذخیره تغییرات
                </Button>

                <Button variant='outline' color='danger' size='sm'>
                    ذخیره تغییرات
                </Button>
                <Button variant='text' color='danger' size='sm'>
                    ذخیره تغییرات
                </Button>
                <Button variant='light' color='green' size='lg'>
                    ذخیره تغییرات
                </Button>
            </div>

            <hr />
            <h2 className='bg-gray-400 text-center text-3xl font-bold'>Headline</h2>
            <hr />
            <div className='text-h1-bold'>تست فونت فارسی یکان H1-B</div>

            <div className='text-h1-heavy'>تست فونت فارسی یکان H1-H</div>
            <hr />
            <div className='text-h2-bold'>تست فونت فارسی یکان H2-B</div>

            <div className='text-h2-heavy'>تست فونت فارسی یکان H2-H</div>
            <hr />
            <div className='text-h3-bold'>تست فونت فارسی یکان H3-B</div>

            <div className='text-h3-heavy'>تست فونت فارسی یکان H3-H</div>
            <hr />
            <div className='text-h4-bold'>تست فونت فارسی یکان H4-B</div>

            <div className='text-h4-heavy'>تست فونت فارسی یکان H4-H</div>

            <div className='text-h4-medium'>تست فونت فارسی یکان H4-M</div>

            <div className='text-h4-regular'>تست فونت فارسی یکان H4-R</div>

            <hr />
            <h2 className='bg-red-300 text-center text-3xl font-bold'>Subtitle1</h2>
            <hr />

            <div className='text-subtitle1-heavy'>تست فونت فارسی یکان subtitle1-H</div>

            <div className='text-subtitle1-bold'>تست فونت فارسی یکان subtitle1-B</div>

            <div className='text-subtitle1-medium'>تست فونت فارسی یکان subtitle1-M</div>

            <div className='text-subtitle1-regular'>تست فونت فارسی یکان subtitle1-R</div>

            <hr />
            <h2 className='bg-red-300 text-center text-3xl font-bold'>Subtitle2</h2>
            <hr />

            <div className='text-subtitle2-heavy'>تست فونت فارسی یکان subtitle2-H</div>

            <div className='text-subtitle2-bold'>تست فونت فارسی یکان subtitle2-B</div>

            <div className='text-subtitle2-medium'>تست فونت فارسی یکان subtitle2-M</div>

            <div className='text-subtitle2-regular'>تست فونت فارسی یکان subtitle2-R</div>

            <hr />
            <h2 className='bg-red-300 text-center text-3xl font-bold'>Body1</h2>
            <hr />

            <div className='text-body1-heavy'>تست فونت فارسی یکان Body1-H</div>

            <div className='text-body1-bold'>تست فونت فارسی یکان Body1-B</div>

            <div className='text-body1-medium'>تست فونت فارسی یکان Body1-M</div>

            <div className='text-body1-regular'>تست فونت فارسی یکان Body1-R</div>

            <hr />
            <h2 className='bg-red-300 text-center text-3xl font-bold'>Body2</h2>
            <hr />

            <div className='text-body2-heavy'>تست فونت فارسی یکان Body2-H</div>

            <div className='text-body2-bold'>تست فونت فارسی یکان Body2-B</div>

            <div className='text-body2-medium'>تست فونت فارسی یکان Body2-M</div>

            <div className='text-body2-regular'>تست فونت فارسی یکان Body2-R</div>

            <hr />
            <h2 className='bg-red-300 text-center text-3xl font-bold'>Body3</h2>
            <hr />

            <div className='text-body3-heavy'>تست فونت فارسی یکان Body3-H</div>

            <div className='text-body3-bold'>تست فونت فارسی یکان Body3-B</div>

            <div className='text-body3-medium'>تست فونت فارسی یکان Body3-M</div>

            <div className='text-body3-regular'>تست فونت فارسی یکان Body3-R</div>

            <hr />
            <h2 className='bg-red-300 text-center text-3xl font-bold'>overline</h2>
            <hr />

            <div className='text-overline-bold'>تست فونت فارسی یکان overline-b</div>

            <div className='text-overline-medium'>تست فونت فارسی یکان overline-m</div>

            <div className='text-overline-regular'>تست فونت فارسی یکان overline-r</div>
        </div>
    );
};
export default Page;
