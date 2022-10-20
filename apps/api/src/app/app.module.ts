import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import { PropertyModule } from './property/property.module';
import { PropertyDetailsModule } from './property-details/property-details.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    PropertyModule,
    PropertyDetailsModule,
    UserModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
