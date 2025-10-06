import { Smartphone, Phone, Unlock, Monitor, HardDrive, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, any> = {
  Smartphone,
  Phone,
  Unlock,
  Monitor,
  HardDrive,
  Shield
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] || Smartphone;

  return (
    <Card className="p-6 hover-elevate transition-all cursor-pointer" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg" data-testid="text-service-title">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground" data-testid="text-service-description">
          {description}
        </p>
      </div>
    </Card>
  );
}
