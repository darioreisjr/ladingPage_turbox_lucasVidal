export interface Plan {
    name: string;
    price: string;
    period: string;
    image: string;
    features: string[];
}

export interface Feature {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;

}

export interface FAQ {
    question: string;
    answer: string;
}

export interface WhatsAppFormData {
    name: string;
    plan: string;
}

export interface NavItem {
    to: string;
    label: string;
}