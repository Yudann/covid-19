
import React from 'react';
import { 
  Thermometer, 
  Wind, 
  Activity, 
  ShieldCheck, 
  HandMetal, 
  Users, 
  Syringe, 
  Shield,
  AlertCircle
} from 'lucide-react';
import { Symptom, PreventionStep, StatData, ChartDataItem } from './types';

export const SYMPTOMS: Symptom[] = [
  {
    title: "Demam",
    description: "Suhu tubuh di atas 38 derajat Celcius, seringkali disertai dengan menggigil.",
    icon: "Thermometer"
  },
  {
    title: "Batuk Kering",
    description: "Batuk yang tidak mengeluarkan dahak dan terasa gatal di tenggorokan.",
    icon: "Wind"
  },
  {
    title: "Sesak Napas",
    description: "Kesulitan bernapas atau napas terasa pendek, terutama saat beraktivitas.",
    icon: "Activity"
  },
  {
    title: "Kelelahan",
    description: "Merasa sangat lelah meskipun sudah beristirahat dengan cukup.",
    icon: "ShieldCheck"
  }
];

export const PREVENTION: PreventionStep[] = [
  {
    title: "Pakai Masker",
    description: "Gunakan masker medis atau masker kain 3 lapis saat berada di luar rumah.",
    icon: "Shield"
  },
  {
    title: "Cuci Tangan",
    description: "Cuci tangan dengan sabun dan air mengalir selama minimal 20 detik.",
    icon: "HandMetal"
  },
  {
    title: "Jaga Jarak",
    description: "Hindari kerumunan dan jaga jarak minimal 1-2 meter dari orang lain.",
    icon: "Users"
  },
  {
    title: "Vaksinasi",
    description: "Dapatkan dosis vaksin lengkap untuk meningkatkan kekebalan tubuh.",
    icon: "Syringe"
  }
];

export const STATS: StatData[] = [
  {
    label: "Total Kasus",
    value: "6.815.420",
    color: "bg-blue-600",
    description: "Kumulatif sejak Maret 2020"
  },
  {
    label: "Sembuh",
    value: "6.645.120",
    color: "bg-emerald-600",
    description: "Tingkat kesembuhan 97.5%"
  },
  {
    label: "Kasus Aktif",
    value: "9.200",
    color: "bg-amber-500",
    description: "Pasien dalam perawatan/isolasi"
  },
  {
    label: "Meninggal",
    value: "161.100",
    color: "bg-rose-600",
    description: "Tingkat kematian 2.4%"
  }
];

export const CHART_DATA: ChartDataItem[] = [
  { name: 'Jan', cases: 1200 },
  { name: 'Feb', cases: 2100 },
  { name: 'Mar', cases: 1800 },
  { name: 'Apr', cases: 900 },
  { name: 'Mei', cases: 400 },
  { name: 'Jun', cases: 200 },
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Thermometer: <Thermometer className="w-8 h-8 text-blue-600" />,
  Wind: <Wind className="w-8 h-8 text-blue-600" />,
  Activity: <Activity className="w-8 h-8 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  Shield: <Shield className="w-8 h-8 text-emerald-600" />,
  HandMetal: <HandMetal className="w-8 h-8 text-emerald-600" />,
  Users: <Users className="w-8 h-8 text-emerald-600" />,
  Syringe: <Syringe className="w-8 h-8 text-emerald-600" />,
  AlertCircle: <AlertCircle className="w-6 h-6 text-white" />
};
