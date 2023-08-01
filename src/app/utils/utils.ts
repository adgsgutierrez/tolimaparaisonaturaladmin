export class Utils{

    static transformStringToClear(string: string): string {
        return string.trim().toLowerCase().replace(/ /g, '_');
    }
}