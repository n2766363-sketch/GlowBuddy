import { AIDetectedSkinType, SkinColor, SkinType } from "@/constants/skinTypes";

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface SkinProfile {
  skinColor?: SkinColor;
  skinType?: SkinType;
  aiDetectedSkinType?: AIDetectedSkinType;
  lastAnalysisDate?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  ingredients: string[];
  keyIngredients: string[];
  usage: string;
  tags: string[];
  compatibleSkinTypes: AIDetectedSkinType[];
  buyLink: string;
  reviews?: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}