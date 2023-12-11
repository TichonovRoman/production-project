import {Project} from "ts-morph";

const project = new Project({});


/**
 * Это скрипт который меняет адресы импортов в файлах (добавляет к абсолютным путям @/ )
 */

//  делаем выборку всех файлов с расширением ts и tsx
project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

// получаем эти файлы
const files = project.getSourceFiles();
const layers = ["app", "entities", "features", "pages", "shared", "widgets"]

// проверяем совпадение в адресе импорта с названием слоев (проверяем - начинается ли импорт с определенных значений
// указанный в layers)
function isAbsolute(value: string) {
    return layers.some(path => value.startsWith(path))
}


files.forEach(sourceFile => {
    // получаем адреса импортов в этих файлах (массив)
    const importDeclarations = sourceFile.getImportDeclarations();

    // итеируемся по каждому адресу импорта
    importDeclarations.forEach(importDeclaration => {
        // получаем адресс импорта
        const value = importDeclaration.getModuleSpecifierValue()

        if (isAbsolute(value)) {
            // устанавливаем адрес импорта, добавляя туда @/
            importDeclaration.setModuleSpecifier(`@/${value}`)
        }
    })
})


// обязательно сохраняем все итоги манипуляций с ast деревом:
project.save();