import React from 'react';
import PartnerCard from './PartnerCard/PartnerCard';

interface Partner {
  id: number;
  logo?: string;
  name?: string;
  title: string;
  description: string;
  bgImage?: string;
  fullWidth: boolean;
  navPath?:any
  isButton?:boolean;
  
}

interface AppGridPartnersProps {
  partners: Partner[];
  navPath?:any
  title?: string; // Optional title for the section
}

const AppGridPartners: React.FC<AppGridPartnersProps> = ({ partners,title }) => {
  return (
    <section className="py-12 px-4 lg:mx-24 mx-4">
      {title && <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">{title}</h2>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner}  />
        ))}
      </div>
    </section>
  );
};

export default AppGridPartners;