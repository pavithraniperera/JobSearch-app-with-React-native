declare module "*.png" {
    const value: string; // TypeScript understands that any .png import will be treated as a string
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

//.d.ts file stands for "Declaration File", and it's used in TypeScript to define types for modules that don't have their own TypeScript definitions.
//TypeScript doesn’t natively understand .png, .jpg, .css, or other non-TS/JS files. By creating a .d.ts file, we manually define the type for such imports, preventing TypeScript errors.
