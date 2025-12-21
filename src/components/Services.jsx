import React from 'react';

const Services = () => {
  const services = [
    { title: "Preventative Care/Wellness", desc: "At La Verne Animal Hospital, our approach to veterinary care is to promote excellent overall...", icon: "🐶" },
    { title: "Emergency Medicine & Urgent Care", desc: "Health problems, injuries, and illnesses can happen at any time, and may need immediate attention...", icon: "💼" },
    { title: "In-House Diagnostics", desc: "When your pet is not feeling well, one of the first things a veterinarian will...", icon: "📋" },
    { title: "Dentistry", desc: "Do you know the number one disease affecting cats and dogs today? If you guessed...", icon: "🦷" },
    { title: "Microchipping", desc: "We encourage all pet owners to microchip their companions. The sad fact is that...", icon: "🏷️" },
    { title: "Surgery", desc: "Our hospital provides a full range of surgical services, from standard spaying and neutering to...", icon: "🔪" }
  ];

  return (
    <>
    <div
  style={{
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    height: "300px",
    backgroundImage: "url(/images/hero-dogs.png)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
/>



      {/* 2- قسم العنوان والفقرة بخلفية بيج فاتح */}
      <section style={{
          
        padding: '60px 20px',
      
      }}>
        <img 
    src="/images/leaves-dark.png"  // غيّر المسار إذا اسم الصورة أو مكانها مختلف
    alt="Royal Care Veterinary Clinic Logo"
    style={{
      width: '100px',           // حجم مناسب (عدّله حسب شعارك)
      height: 'auto',
      marginBottom: '-20px',     // مسافة بين الشعار والعنوان
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}
  />
        <h1 style={{
            //fontFamily: '"monospace,monospace"',
            fontFamily: 'Glyphicons Halflings',
            //  font-family: monospace,monospace;
          fontSize: '2.8rem',
          marginBottom: '20px',
         // borderBottom: '4px solid #ccc',
          display: 'inline-block',
          paddingBottom: '10px',
          textAlign: 'center'
        }}>
          SERVICES
        </h1>

        <p style={{
          fontFamily: '"Helvetica Neue"',
          //fontfamily: Menlo,Monaco,Consolas,"Courier New",monospace
          maxWidth: '2200px',
          margin: '0 auto',
          fontSize: '1.15rem',
          lineHeight: '1.8',
          color: '#7a7878ff',
           textAlign: 'justify'
          

        }}>
          At Royal Care Veterinary Clinic, we understand how much your pets mean to you—they are family.
           That’s why we are committed to providing compassionate, high-quality veterinary care tailored to your pet’s unique needs. 
           From routine wellness checkups to advanced medical treatments, our experienced team is here to support your pet through every stage of life.
            We take pride in building lasting relationships with our clients and ensuring a safe, caring environment for every visit. 
            If you have any questions about our services or would like to schedule an appointment,<b>we are always happy to assist you.</b> 
            
        </p>
      </section>

      {/* 3- قسم الست خدمات (3 فوق + 3 تحت) */}
      <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',  // دائمًا 3 أعمدة → 3 فوق و3 تحت
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                backgroundColor: '#d0e8d0',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem'
              }}>
                {service.icon}
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#333' }}>
                {service.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;