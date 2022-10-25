import { Resolver, Query, ResolveField, Parent, Args } from '@nestjs/graphql';
import { Property } from './dto/models/property.model';
import { PropertyService } from './property.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from '../user/user.service';

@Resolver(() => Property)
export class PropertyResolver {
  constructor(
    private readonly propertyService: PropertyService,
    private readonly userService: UserService
  ) {}

  @Query(() => Property)
  async property(@Args('id') id: string) {
    return this.propertyService.getById(id);
  }

  @Query(() => [Property])
  async properties() {
    return this.propertyService.getAll();
  }

  @ResolveField()
  async details(@Parent() property: Property) {
    const { id } = property;
    return await this.propertyService.getDetails(id);
  }

  @ResolveField()
  async agent(@Parent() property: Property) {
    const { agentId } = property;
    return await this.userService.getAgent(agentId);
  }

  @ResolveField()
  async reviews(@Parent() property: Property) {
    const { id } = property;
    return await this.propertyService.getReviews(id);
  }
}
