import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export function unslug(a: string) {
	let o = a.replace("-", " ")
	return o.trim()
}

export function capitaliseWords(a: string) {
	let words = a.split(" ")
	return words.reduce((accumulated, cur) => `${accumulated[0].toUpperCase()}${accumulated.slice(1)}` + ` ${cur[0].toUpperCase()}${cur.slice(1)} `).trim()
}