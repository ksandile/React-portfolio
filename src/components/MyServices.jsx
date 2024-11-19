import React from 'react';
import "../style.css";

const MyServices = () => {
  return (
    <section className="my-services">
      <h2 className="section__title section__title--services">
        <strong>What I do</strong>
      </h2>
      <div className="services">
        <div className="service">
          <h3>
            <strong>Design + Development</strong>
          </h3>
          <hr />
          <p>
            Creating a product or solution by combining both design and
            development activities. My design involves conceptualizing and
            planning the user interface, user experience, and overall
            aesthetics, while my development focuses on the implementation of
            the technical aspects and functionalities. To ensures a holistic
            approach to building effective and visually appealing solutions,
            whether it be websites, applications, or other digital or physical
            products. This synergy results in well-crafted, functional, and
            user-friendly end products.
          </p>
        </div>

        <div className="service">
          <h3>
            <strong>E-Commerce</strong>
          </h3>
          <hr />
          <p>
            As an e-commerce entity, my primary functions involve facilitating
            online transactions for buying and selling goods or services. This
            includes maintaining a user-friendly website or platform, managing
            product listings, processing payments securely, handling shipping
            and logistics, providing customer support, and implementing
            marketing strategies to attract and retain customers. Additionally,
            I may employ data analytics to understand customer behavior and
            optimize the overall shopping experience. Overall, my goal is to
            create a seamless and efficient online marketplace for buyers and
            sellers.
          </p>
        </div>

        <div className="service">
          <h3>
            <strong>WordPress</strong>
          </h3>
          <hr />
          <p>
            As a WordPress site, my primary function is to serve as a content
            management system (CMS) for creating and managing websites. I
            facilitate the creation, organization, and publication of various
            types of content, including text, images, and multimedia.
            Additionally, I offer a range of themes and plugins to customize
            and extend website functionality. Users can easily update and
            maintain their websites through an intuitive dashboard, making
            WordPress a popular choice for individuals and businesses looking
            to establish an online presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
