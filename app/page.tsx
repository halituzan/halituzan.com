import HomeSection from "@/components/HomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <section className='flex gap-4'>
      <HomeSection />
      {/* <div className='flex flex-col'>
        <div className='w-44 h-44'>
          <Image
            src={"/images/profile.webp"}
            width={200}
            height={200}
            alt='profile'
            className='object-fill rounded-lg'
          />
        </div>
        <div className=' mt-2'>
          <p>Software Developer</p>
          <hr className='my-1' />
          <p className='text-small mb-1'>Halit Uzan</p>
          <p className='text-small mb-1'>halit.uzan@gmail.com</p>
          <p className='text-small mb-1'>+90 (530) 114 25 48</p>
          <p className='text-small mb-1'>İstanbul / Türkiye</p>
        </div>
      </div>
      <div>
        <p className='mb-2'>
          Merhaba! Ben Halit, yazılım geliştirme süreçlerinde kullanıcı
          deneyimini ön planda tutarak işlevsel ve modern çözümler üreten bir
          geliştiriciyim. Özellikle Next.js, Node.js ve MongoDB gibi
          teknolojilerle çalışıyorum ve veri yönetiminde geniş bir tecrübeye
          sahibim.
        </p>
        <p className='mb-2'>
          Projelerimde hem frontend hem de backend tarafında dengeli ve güçlü
          yapılar kurmaya özen gösteriyorum. Fabric.js ve React ile kullanıcı
          dostu arayüzler geliştiriyor, özel taleplere uygun çözümler sunuyorum.
          Farklı projelerimde performansı optimize etmek, kullanıcı deneyimini
          en üst seviyeye taşımak için çalışıyorum.
        </p>
        <p className='mb-2'>
          Yazılım dünyasında yeniliklere açık, öğrenmeyi seven biriyim.
          İletişime geçmekten çekinmeyin, birlikte daha fazlasını başarabiliriz!
        </p>
      </div> */}
    </section>
  );
}
