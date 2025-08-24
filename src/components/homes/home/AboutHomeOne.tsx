export default function AboutHomeOne() {
  return (
    <section className="about-section style-v01 section-padding white-bg">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
            <div className="about-thumv01 position-relative">
              <img
                src="/assets/img/about/choose-man.png"
                alt="À propos de Candia Algérie"
                className="mimg"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about-contentv1">
              <div className="section-title mb-40">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  Pourquoi nous choisir
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Apportons la pureté du lait à votre quotidien
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Chez Candia Algérie, nous nous engageons à offrir des
                  produits laitiers de la plus haute qualité, respectant les
                  normes les plus strictes pour répondre aux besoins de chaque
                  famille.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
