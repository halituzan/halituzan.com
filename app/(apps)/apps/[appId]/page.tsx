"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";

const apps = [
  {
    id: "invtracking",
    name: "Uygulama 1",
    description:
      "Uygulama 1 detaylı açıklaması burada yer alacak. Bu alanda uygulamanın özellikleri ve sunduğu faydalar daha detaylı şekilde belirtilir.",
    longDescription:
      "Uygulama 1 hakkında uzun açıklama. Bu uygulama şu ihtiyaçlarınızı karşılamak için tasarlanmıştır. Uygulamanın ana özellikleri ve kullanıcıya sağladığı faydalar burada detaylı olarak anlatılır.",
    icon: "/invtracking.png",
    screenshots: [
      "/apps/app1-screenshot1.png",
      "/apps/app1-screenshot2.png",
      "/apps/app1-screenshot3.png",
    ],
    platforms: ["iOS", "Android"],
    storeLinks: {
      ios: "https://apps.apple.com/app/your-app1",
      android:
        "https://play.google.com/store/apps/details?id=com.halituzan.app1",
    },
    features: ["Özellik 1", "Özellik 2", "Özellik 3"],
    version: "1.0.0",
    releaseDate: "2023-01-01",
    category: "Verimlilik",
  },
];

export default function AppDetailPage() {
  const params = useParams();
  const appId = params.appId as string;
  const [app, setApp] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("overview");

  useEffect(() => {
    // Gerçek bir API'dan veri almak yerine örnek verilerimizi kullanıyoruz
    const foundApp = apps.find((a) => a.id === appId);
    setApp(foundApp);
    setLoading(false);
  }, [appId]);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        Yükleniyor...
      </div>
    );
  }

  if (!app) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className={title()}>Uygulama Bulunamadı</h1>
        <p className='mt-4'>İstediğiniz uygulama mevcut değil.</p>
        <Button as={Link} href='/apps' color='primary' className='mt-4'>
          Tüm Uygulamalara Dön
        </Button>
      </div>
    );
  }

  return (
    <section className='flex flex-col items-center py-8 px-4 md:px-8'>
      <div className='w-full max-w-6xl'>
        <div className='flex flex-col md:flex-row gap-6 mb-8'>
          <div className='md:w-1/3 flex flex-col items-center'>
            <Image
              alt={app.name}
              src={app.icon}
              width={180}
              height={180}
              radius='lg'
              shadow='md'
              fallbackSrc='/placeholder-icon.png'
              className='mb-4'
            />
            <div className='flex gap-2 justify-center mb-4'>
              {app.platforms.includes("iOS") && (
                <Button
                  as={Link}
                  href={app.storeLinks.ios}
                  target='_blank'
                  rel='noopener noreferrer'
                  color='primary'
                  size='lg'
                  className='w-full'
                >
                  App Store'dan İndir
                </Button>
              )}
              {app.platforms.includes("Android") && (
                <Button
                  as={Link}
                  href={app.storeLinks.android}
                  target='_blank'
                  rel='noopener noreferrer'
                  color='primary'
                  size='lg'
                  className='w-full'
                >
                  Google Play'den İndir
                </Button>
              )}
            </div>
            <div className='w-full mt-4'>
              <Card>
                <CardBody>
                  <div className='space-y-2'>
                    <div className='flex justify-between'>
                      <span className='text-default-500'>Versiyon</span>
                      <span>{app.version}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-default-500'>Yayın Tarihi</span>
                      <span>{app.releaseDate}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-default-500'>Kategori</span>
                      <span>{app.category}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-default-500'>Platformlar</span>
                      <div className='flex gap-1'>
                        {app.platforms.map((platform: string) => (
                          <Chip key={platform} size='sm' variant='flat'>
                            {platform}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className='md:w-2/3'>
            <h1 className={title({ size: "sm" })}>{app.name}</h1>
            <p className='mt-2 mb-6 text-lg'>{app.description}</p>

            <Tabs
              aria-label='App Tabs'
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(key as string)}
              className='mb-6'
            >
              <Tab key='overview' title='Genel Bakış'>
                <p className='mt-4'>{app.longDescription}</p>
                <h3 className={subtitle({ class: "mt-6 mb-3" })}>Özellikler</h3>
                <ul className='list-disc list-inside space-y-2'>
                  {app.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </Tab>
              <Tab key='screenshots' title='Ekran Görüntüleri'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                  {app.screenshots.map((screenshot: string, index: number) => (
                    <Image
                      key={index}
                      alt={`${app.name} Screenshot ${index + 1}`}
                      src={screenshot}
                      width={400}
                      height={800}
                      radius='md'
                      shadow='sm'
                      fallbackSrc='/placeholder-screenshot.png'
                      className='w-full object-cover'
                    />
                  ))}
                </div>
              </Tab>
              <Tab key='privacy' title='Gizlilik Politikası'>
                <div className='mt-4 prose max-w-none'>
                  <h3 className='text-xl font-bold mb-4'>
                    Gizlilik Politikası
                  </h3>
                  <p>
                    Bu gizlilik politikası, {app.name} uygulamasını
                    kullandığınızda toplanan, kullanılan ve paylaşılan bilgiler
                    hakkında sizi bilgilendirmek için hazırlanmıştır.
                  </p>
                  <h4 className='text-lg font-semibold mt-4 mb-2'>
                    Topladığımız Bilgiler
                  </h4>
                  <p>
                    Uygulamamızı kullanırken, size daha iyi hizmet verebilmek
                    için kişisel bilgilerinizi talep edebiliriz. İstenen
                    bilgiler kaydedilecek ve bu gizlilik politikasında
                    belirtilen şekilde kullanılacaktır.
                  </p>
                  <h4 className='text-lg font-semibold mt-4 mb-2'>
                    Bilgilerin Kullanımı
                  </h4>
                  <p>
                    Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:
                  </p>
                  <ul className='list-disc list-inside my-2'>
                    <li>Uygulamamızı geliştirmek için</li>
                    <li>Kullanıcı deneyiminizi özelleştirmek için</li>
                    <li>Hizmet kalitemizi iyileştirmek için</li>
                  </ul>
                  <h4 className='text-lg font-semibold mt-4 mb-2'>
                    Bilgi Güvenliği
                  </h4>
                  <p>
                    Kişisel bilgilerinizin güvenliğini sağlamak için çeşitli
                    güvenlik önlemleri kullanıyoruz. Bilgileriniz fiziksel,
                    elektronik ve prosedürel korumalarla saklanmaktadır.
                  </p>
                </div>
              </Tab>
              <Tab key='terms' title='Kullanım Şartları'>
                <div className='mt-4 prose max-w-none'>
                  <h3 className='text-xl font-bold mb-4'>Kullanım Şartları</h3>
                  <p>
                    Bu kullanım şartları, {app.name} uygulamasını kullanmanız
                    ile ilgili hak ve yükümlülüklerinizi belirtmektedir.
                  </p>
                  <h4 className='text-lg font-semibold mt-4 mb-2'>Lisans</h4>
                  <p>
                    {app.name} uygulaması size kişisel, ticari olmayan, üçüncü
                    şahıslara devredilemez, münhasır olmayan bir kullanım hakkı
                    vermektedir.
                  </p>
                  <h4 className='text-lg font-semibold mt-4 mb-2'>
                    Kullanım Sınırlamaları
                  </h4>
                  <p>Uygulamamızı aşağıdaki şekillerde kullanmamalısınız:</p>
                  <ul className='list-disc list-inside my-2'>
                    <li>Yasalara aykırı herhangi bir şekilde</li>
                    <li>Diğer kullanıcıların haklarını ihlal edecek şekilde</li>
                    <li>Uygulamanın normal işleyişini engelleyecek şekilde</li>
                  </ul>
                  <h4 className='text-lg font-semibold mt-4 mb-2'>
                    Sorumluluk Reddi
                  </h4>
                  <p>
                    Uygulamamız "olduğu gibi" sunulmaktadır ve herhangi bir
                    garanti vermemekteyiz. Uygulamamızın kullanımından
                    doğabilecek herhangi bir zarardan sorumlu değiliz.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
