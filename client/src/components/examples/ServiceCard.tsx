import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <div className="p-4">
      <ServiceCard
        title="Mobile Accessories"
        description="All types of mobile accessories available at FlexTech! From cases, chargers, headphones to screen protectors and more."
        icon="Smartphone"
      />
    </div>
  );
}
