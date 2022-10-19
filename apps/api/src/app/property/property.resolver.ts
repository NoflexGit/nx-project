import { Resolver, Query } from '@nestjs/graphql';
import { Property } from './property.model';
import { PropertyService } from './property.service';

@Resolver(() => Property)
export class PropertyResolver {
  constructor(private readonly propertyService: PropertyService) {}

  @Query(() => [Property])
  async properties() {
    return this.propertyService.properties();
  }
}
