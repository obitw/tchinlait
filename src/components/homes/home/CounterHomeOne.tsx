"use client"
import Image, { StaticImageData } from 'next/image';
import Count from '@/components/common/Count';
import counter_img_1 from "@/assets/img/icon/count1.png";
import counter_img_2 from "@/assets/img/icon/count2.png";
import counter_img_3 from "@/assets/img/icon/count3.png";
import counter_img_4 from "@/assets/img/icon/count4.png";

interface CountDataType {
  id: number;
  number: number;
  icon: StaticImageData;
  text: string;
  title: string;
}

const counter_data: CountDataType[] = [
  { id: 1, number: 15, icon: counter_img_1, text: "+", title: "Années d'expérience" },
  { id: 2, number: 50, icon: counter_img_2, text: "+", title: "Fermes partenaires" },
  { id: 3, number: 100, icon: counter_img_3, text: "+", title: "Produits laitiers" },
  { id: 4, number: 10000, icon: counter_img_4, text: "+", title: "Clients satisfaits" },
];

interface CounterHomeOneProps {
  style_2?: boolean;
}

export default function CounterHomeOne({ style_2 = false }: CounterHomeOneProps) {
  return (
    <section className={`position-relative ${style_2 ? "counter-section02" : "counter-section"}`}>
      <div className="container">
        <div className="counter-version-wrapv1 d-flex align-items-center justify-content-between gap-4">
          {counter_data.map((item) => (
            <div key={item.id} className={`counter-items ${style_2 ? "style02" : ""}`}>
              {style_2 ? (
                <div className="d-flex flex-column">
                  <h2 className="d-flex align-items-center justify-content-center">
                    <span className="count"><Count number={item.number} /></span> {item.text}
                  </h2>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
                    <div className="flex-shrink-0">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={50} 
                        height={50} 
                        style={{ width: '50px', height: 'auto' }} 
                      />
                    </div>
                    <p className="p900-clr mb-0">{item.title}</p>
                  </div>
                </div>
              ) : (
<div className="d-flex flex-column">
                  <h2 className="d-flex align-items-center justify-content-center">
                    <span className="count"><Count number={item.number} /></span> {item.text}
                  </h2>
                  <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
                    <div className="flex-shrink-0">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={50} 
                        height={50}
                        style={{ width: '50px', height: 'auto' }}
                        priority
                      />
                    </div>
                    <p className="p900-clr mb-0">{item.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {style_2 && (
            <>
              <Image 
                src="/assets/img/element/count-flower-left.png" 
                alt="Décoration fleur gauche" 
                width={100}
                height={100}
                className="cout-flower-left" 
              />
              <Image 
                src="/assets/img/element/count-flower-right.png" 
                alt="Décoration fleur droite" 
                width={100}
                height={100}
                className="cout-flower-right" 
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
