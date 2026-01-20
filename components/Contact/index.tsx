// ContactForm.tsx
"use client";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "" | "success" | "error";

interface ApiResponse {
  success: boolean;
  error?: string;
}

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Captions, Mail, MessageSquare, Send, User } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/verify", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChangeCaptcha = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<FormStatus>("");
  const [captchaError, setCaptchaError] = useState<boolean>(false);

  useEffect(() => {
    const loadScriptByURL = (
      id: string,
      url: string,
      callback: () => void
    ): void => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = callback;
        document.body.appendChild(script);
      } else if (callback) {
        callback();
      }
    };

    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
      () => console.log("Script loaded!")
    );
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setCaptchaError(false);

    try {
      const token = await new Promise<string>((resolve, reject) => {
        if (!window.grecaptcha) {
          reject(new Error("reCAPTCHA not loaded"));
          return;
        }

        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string, {
              action: "submit",
            })
            .then(resolve)
            .catch(reject);
        });
      });
      console.log("token", token);

    //   const response = await fetch("/api/send-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       ...formData,
    //       recaptchaToken: token,
    //     }),
    //   });

    //   const data: ApiResponse = await response.json();

    //   if (response.ok && data.success) {
    //     setStatus("success");
    //     setFormData({ name: "", email: "", subject: "", message: "" });
    //   } else {
    //     if (data.error === "recaptcha-failed") {
    //       setCaptchaError(true);
    //     } else {
    //       setStatus("error");
    //     }
    //   }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='min-h-screen flex items-start justify-center p-4 pt-0'>
      <Card shadow='none' className='w-full mx-auto border '>
        <CardHeader className='space-y-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg px-6 py-8 flex flex-col'>
          <h2 className='text-3xl font-bold text-center'>İletişim</h2>
          <p className='text-blue-100 text-center'>
            Aşağıdaki formu kullanarak benimle iletişime geçebilirsiniz?
          </p>
        </CardHeader>
        <CardBody className='space-y-6 p-6'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-2'>
              <label htmlFor='name' className='text-sm font-medium'>
                İsim
              </label>
              <div className='relative'>
                <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                <Input
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='pl-10'
                  placeholder='Adınız Soyadınız'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium'>
                E-posta
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='pl-10'
                  placeholder='ornek@email.com'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label htmlFor='subject' className='text-sm font-medium'>
                Konu
              </label>
              <div className='relative'>
                <Captions className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                <Input
                  id='subject'
                  name='subject'
                  type='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='pl-10'
                  placeholder='Konu'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label htmlFor='message' className='text-sm font-medium'>
                Mesajınız
              </label>
              <div className='relative'>
                <MessageSquare className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                <Textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='min-h-[120px] pl-10'
                  placeholder='Mesajınızı buraya yazın...'
                />
              </div>
            </div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              ref={recaptchaRef}
              onChange={handleChangeCaptcha}
              onExpired={handleExpired}
            />
            <Button
              type='submit'
              className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6'
              disabled={loading || !isVerified}
            >
              {loading ? (
                "Gönderiliyor..."
              ) : (
                <span className='flex items-center justify-center gap-2'>
                  <Send className='h-5 w-5' />
                  Mesajı Gönder
                </span>
              )}
            </Button>

            {captchaError &&
              "reCAPTCHA doğrulaması başarısız oldu. Lütfen tekrar deneyin."}

            {status === "success" &&
              "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."}

            {status === "error" && !captchaError && (
              <p>Bir hata oluştu. Lütfen tekrar deneyin.</p>
            )}
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactForm;

// global.d.ts
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}
