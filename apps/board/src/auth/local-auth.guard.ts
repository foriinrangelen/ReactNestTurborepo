import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// AuthGuard 상속받아 
@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){

}