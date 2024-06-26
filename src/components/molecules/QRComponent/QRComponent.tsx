import Oval from '@assets/images/backgrounds/oval.svg';

export default function QRComponent() {
  return (
    <div className={'p-[16px] bg-white rounded-[20px] flex flex-col gap-[24px] w-[320px]'}>
        <img className={'h-[288px] rounded-[20px]'} src={'/images/image-qr-code.png'} alt={'QR Code'}/>
        <div className={'flex flex-col gap-[16px] text-center mb-[8px]'}>
            <h2 className={'text-[22px] font-bold text-dark-blue'}>Improve your front-end skills by building projects</h2>
            <p className={'text-[15px] mb-[16px] text-grayish-blue'}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>
  );
}
