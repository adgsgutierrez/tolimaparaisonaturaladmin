export class Utils{

    static transformStringToClear(string: string): string {
        string = Utils.deleteDiacriticosEs(string.toLowerCase());
        return string.trim().replace(/ /g, '_');
    }

    static deleteDiacriticosEs(texto: string) {
        return texto
               .normalize('NFD')
               .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
               .normalize();
    }
}