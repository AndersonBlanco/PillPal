// Reexport the native module. On web, it will be resolved to BlepModule.web.ts
// and on native platforms to BlepModule.ts
export { default } from './src/BlepModule';
export { default as BlepView } from './src/BlepView';
export * from  './src/Blep.types';
