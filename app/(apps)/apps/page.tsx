"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";

// Örnek uygulama verileri
const apps = [
  {
    id: "invtracking",
    name: "InvTracking",
    description:
      "InvTracking, finansal varlıklarınızı ve giderlerinizi tek bir yerden yönetmenizi sağlayan, tamamen ücretsiz bir uygulamadır.",
    icon: "/invtracking.png", // uygun icon'ları public klasörüne eklemelisiniz
    platforms: ["iOS", "Android"],
    storeLinks: {
      ios: "https://apps.apple.com/app/your-app1",
      android:
        "https://play.google.com/store/apps/details?id=com.halituzan.app1",
    },
  },
];

export default function AppsPage() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-lg text-center justify-center'>
        <h1 className={title()}>Mobil Uygulamalar</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Geliştirdiğim mobil uygulamaları keşfedin
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {apps.map((app) => (
          <Card key={app.id} className='max-w-md'>
            <CardHeader className='flex gap-3'>
              <Image
                alt={app.name}
                height={40}
                radius='sm'
                src={app.icon}
                width={40}
                fallbackSrc='/placeholder-icon.png'
              />
              <div className='flex flex-col'>
                <p className='text-md font-semibold'>{app.name}</p>
                <div className='flex gap-1'>
                  {app.platforms.map((platform) => (
                    <Chip key={platform} size='sm' variant='flat'>
                      {platform}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <p>{app.description}</p>
            </CardBody>
            <CardFooter className='flex justify-between'>
              <Link href={`/apps/${app.id}`} color='primary'>
                Detaylar
              </Link>
              <div className='flex gap-2'>
                {app.platforms.includes("iOS") && (
                  <Button
                    as={Link}
                    href={app.storeLinks.ios}
                    target='_blank'
                    rel='noopener noreferrer'
                    variant='flat'
                    size='sm'
                  >
                    App Store
                  </Button>
                )}
                {app.platforms.includes("Android") && (
                  <Button
                    as={Link}
                    href={app.storeLinks.android}
                    target='_blank'
                    rel='noopener noreferrer'
                    variant='flat'
                    size='sm'
                  >
                    Google Play
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
