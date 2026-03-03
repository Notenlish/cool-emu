import { defineDb, defineTable, column } from 'astro:db';


const GameRom = defineTable({
  columns: {
    href: column.text(),
    name: column.text(),
    imgPath: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {GameRom}
});
