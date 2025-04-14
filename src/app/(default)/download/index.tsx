"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { makeToUpVariant } from "@/constants/variants.motion";
import { APPLINK_ANDROID, APPLINK_IOS } from "@/constants";
import { 
  RiFlashlightFill, 
  RiShieldCheckFill, 
  RiGlobalFill, 
  RiMoneyDollarCircleFill, 
  RiCloudFill, 
  RiSettings4Fill, 
  RiAppleFill, 
  RiGooglePlayFill, 
  RiArrowRightSLine, 
  RiCheckFill 
} from 'react-icons/ri';

// Composant réutilisable pour les avantages
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
      <div className="text-primary text-xl">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function DownloadPageContent() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              variants={makeToUpVariant()}
              initial="hidden"
              whileInView="visible"
            >
              Téléchargez Kinaru sur votre appareil
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-white"
              variants={makeToUpVariant({ delay: 0.2 })}
              initial="hidden"
              whileInView="visible"
            >
              Disponible gratuitement sur iOS et Android. Commencez votre
              expérience dès maintenant.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={makeToUpVariant({ delay: 0.3 })}
              initial="hidden"
              whileInView="visible"
            >
              <Link
                href="https://apps.apple.com/app/kinaru"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition duration-300"
              >
                <RiAppleFill className="w-7 h-7 mr-2" />
                App Store
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.kinaru.app"
                className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-green-700 transition duration-300"
              >
                <RiGooglePlayFill className="w-6 h-6 mr-2" />
                Google Play
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={makeToUpVariant()}
            initial="hidden"
            whileInView="visible"
          >
            <span className="text-primary">Une expérience unique</span> sur tous
            vos appareils
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              variants={makeToUpVariant({ delay: 0.2 })}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-2xl font-bold mb-4">Version iOS</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Optimisée pour iPhone et iPad</span>
                </li>
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Compatible avec iOS 14 et versions ultérieures</span>
                </li>
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Synchronisation avec iCloud</span>
                </li>
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Fonctionnalités exclusives Apple</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="https://apps.apple.com/app/kinaru"
                  className="inline-flex items-center text-primary hover:text-primary-dark"
                >
                  Télécharger sur l'App Store
                  <RiArrowRightSLine className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              variants={makeToUpVariant({ delay: 0.3 })}
              initial="hidden"
              whileInView="visible"
            >
              <div className="relative h-[500px] w-[250px]">
                <Image
                  src="/images/iphone-mockup.png"
                  alt="Kinaru sur iPhone"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 250px"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <motion.div
              className="flex justify-center"
              variants={makeToUpVariant({ delay: 0.2 })}
              initial="hidden"
              whileInView="visible"
            >
              <div className="relative h-[500px] w-[250px]">
                <Image
                  src="/images/android-mockup.png"
                  alt="Kinaru sur Android"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 250px"
                />
              </div>
            </motion.div>
            <motion.div
              variants={makeToUpVariant({ delay: 0.3 })}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-2xl font-bold mb-4">Version Android</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Compatible avec tous les appareils Android</span>
                </li>
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Android 8.0 (Oreo) et versions ultérieures</span>
                </li>
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Widgets personnalisables</span>
                </li>
                <li className="flex items-start">
                  <RiCheckFill className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>Intégration Google</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.kinaru.app"
                  className="inline-flex items-center text-primary hover:text-primary-dark"
                >
                  Télécharger sur Google Play
                  <RiArrowRightSLine className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={makeToUpVariant()}
            initial="hidden"
            whileInView="visible"
          >
            Pourquoi télécharger <span className="text-primary">Kinaru</span> ?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <RiFlashlightFill />,
                title: "Performance optimale",
                description:
                  "Application légère et rapide, conçue pour fonctionner efficacement même sur les appareils plus anciens.",
              },
              {
                icon: <RiShieldCheckFill />,
                title: "Sécurité avancée",
                description:
                  "Vos données sont protégées avec les dernières technologies de cryptage, pour une tranquillité d'esprit totale.",
              },
              {
                icon: <RiGlobalFill />,
                title: "Support continu",
                description:
                  "Des mises à jour régulières avec de nouvelles fonctionnalités et améliorations basées sur vos retours.",
              },
              {
                icon: <RiMoneyDollarCircleFill />,
                title: "Gratuit",
                description:
                  "Téléchargez et utilisez Kinaru gratuitement, avec des options premium disponibles pour des fonctionnalités avancées.",
              },
              {
                icon: <RiCloudFill />,
                title: "Synchronisation",
                description:
                  "Synchronisez vos données entre tous vos appareils pour y accéder n'importe où, n'importe quand.",
              },
              {
                icon: <RiSettings4Fill />,
                title: "Personnalisation",
                description:
                  "Adaptez l'interface à vos besoins avec de nombreuses options de personnalisation et thèmes.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={makeToUpVariant({ delay: 0.1 * index })}
                initial="hidden"
                whileInView="visible"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={makeToUpVariant()}
            initial="hidden"
            whileInView="visible"
          >
            Ce que <span className="text-primary">nos utilisateurs</span> disent
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={makeToUpVariant({ delay: 0.2 })}
              initial="hidden"
              whileInView="visible"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">M</span>
                </div>
                <div>
                  <h4 className="font-medium">Michel L.</h4>
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Interface intuitive et réactive. J'utilise l'application
                quotidiennement sur mon iPhone et elle est devenue indispensable
                !"
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={makeToUpVariant({ delay: 0.3 })}
              initial="hidden"
              whileInView="visible"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">S</span>
                </div>
                <div>
                  <h4 className="font-medium">Sophie R.</h4>
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "L'application fonctionne parfaitement sur mon appareil Android.
                La synchronisation entre mon téléphone et ma tablette est
                impeccable."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={makeToUpVariant()}
            initial="hidden"
            whileInView="visible"
          >
            Prêt à commencer avec Kinaru ?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-2xl mx-auto"
            variants={makeToUpVariant({ delay: 0.2 })}
            initial="hidden"
            whileInView="visible"
          >
            Téléchargez l'application maintenant et rejoignez des milliers
            d'utilisateurs satisfaits.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={makeToUpVariant({ delay: 0.3 })}
            initial="hidden"
            whileInView="visible"
          >
            <Link
              href={APPLINK_IOS}
              className="bg-white text-primary px-8 py-4 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
            >
              <RiAppleFill className="w-8 h-8 mr-3" />
              Télécharger pour iOS
            </Link>
            <Link
              href={APPLINK_ANDROID}
              className="bg-white text-primary px-8 py-4 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
            >
              <RiGooglePlayFill className="w-8 h-8 mr-3" />
              Télécharger pour Android
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={makeToUpVariant()}
            initial="hidden"
            whileInView="visible"
          >
            <span className="text-primary">Questions</span> fréquentes
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Kinaru est-elle vraiment gratuite ?",
                answer:
                  "Oui, l'application de base est entièrement gratuite. Nous proposons également des fonctionnalités premium via un abonnement, mais toutes les fonctionnalités essentielles sont accessibles gratuitement.",
              },
              {
                question:
                  "Quelles sont les configurations minimales requises ?",
                answer:
                  "Pour iOS, l'application fonctionne sur iOS 14 et versions ultérieures. Pour Android, nous prenons en charge Android 8.0 (Oreo) et versions ultérieures.",
              },
              {
                question: "Mes données sont-elles sécurisées ?",
                answer:
                  "Absolument. Nous utilisons le cryptage de bout en bout pour protéger vos données. De plus, vous pouvez choisir de stocker vos données localement sur votre appareil uniquement.",
              },
              {
                question:
                  "Comment signaler un problème ou suggérer une fonctionnalité ?",
                answer:
                  "Dans l'application, accédez à Paramètres > Support pour nous contacter directement. Vous pouvez également nous envoyer un email à support@kinaru.com.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={makeToUpVariant({ delay: 0.1 * index })}
                initial="hidden"
                whileInView="visible"
              >
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
