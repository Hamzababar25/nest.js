import { Body, Controller, Delete, Get,Header,HttpCode,HttpStatus,Param,ParseIntPipe,Post, Query, Redirect, Req, Res} from "@nestjs/common";
import { Request, Response } from 'express';
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
 

}

@Controller()
export class UserController {
   
//     @Post()
// Store():any{
//       return " store data in database";
// }
// @Get('user/:id')
//   findOne(@Req() request: Request,@Res() response: Response): any {
//     console.log(request.params)
//      response.json(request.params)
  // }
//   }
//   @Post()
//   @HttpCode(204)
// create() {
//   return {msg:"nbh",statusCode:HttpStatus.OK};
// }
  

//   @Post()
//  @Header('Cache-Control', 'none')
// @Redirect('user/:ythgh', 301)
// create():string { 
// return "this is code";
  

// @Get(':id')
// findOne(@Param() params): string {
//   console.log(params.id);
//   return `This action returns a #${params.id} cat`;
// }

// @Post()
// async create(@Body() createCatDto: CreateCatDto) {
//   console.log(createCatDto)
  
 

  // return 'This action adds a new cat';

// }

@Delete(':id')
remove(@Param('id') id: string) {
  return `This action removes a #${id} cat`;
}

@Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  // @Get()
  // findAll(@Res() res: Response) {
  //    res.status(HttpStatus.OK).json(["ergeerr"]);
  // }

  @Get(':id')
  async findOne(@Query('bbbb', ParseIntPipe) bbbb: number) {
    return {bbbb};
  }
  





















}

