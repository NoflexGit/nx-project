import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Property } from './property.model';
import { PropertyService } from './property.service';
import { PropertyDetailsService } from '../property-details/property-details.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver(() => Property)
export class PropertyResolver {
  constructor(
    private readonly propertyService: PropertyService,
    private readonly propertyDetailsService: PropertyDetailsService
  ) {}

  @Query(() => [Property])
  async properties() {
    return this.propertyService.getAll();
  }

  @ResolveField()
  async details(@Parent() property: Property) {
    const { id } = property;
    return await this.propertyDetailsService.getById(id);
  }
}
