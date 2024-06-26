import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class shortenPipe implements PipeTransform{
    transform(value: string, limit?: number) {
        if (value.length > limit) {
            return value.substr(0, limit) + '...';
        }
        return value;
    }
}