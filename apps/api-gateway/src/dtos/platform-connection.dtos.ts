import { IsString, IsNotEmpty, IsInt } from 'class-validator';
// export class ConnectionDto {
//     @IsNotEmpty()
//     @IsNumberString()
//     itemsPerPage: number;
    
    // @IsNumber()
    // page: number; 

    // @IsString()
    // searchText: string;
    
    // @IsNotEmpty({message:"Please provide valid org Id"})
    // @IsNumber()
    // orgId: number 

    // @IsString()
    // connectionSortBy: string 

    // @IsString()
    // sortValue: string
// }

export class Org {
    @IsInt({message:'number expected'})
    orgId: number;
}