    const { gql } = require('apollo-server');

const typeDefs = gql`
  
  type User {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
    cellPhone: String
    workPhone: String
    role: UserRole!
  }

  enum UserRole {
    Admin
    Manager
    Bookkeeper
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;

// type Account {
//   id: String!
//   name: String!
//   accountType: AccountType!
//   balance: String
//   isSystemAccount: Boolean
// }

// enum AccountType {
//   Income
//   Expense
//   Asset
//   Liability
//   Equity
// }

// type Address {
//   id: String!
//   line1: String
//   line2: String
//   city: String
//   state: String
//   zipcode: String
//   country: String
// }

// type Bill {
//   id: String!
//   vendor: Vendor
//   dueDate: String
//   amountDue: String!
// }

// type BusinessCustomer {
//   id: String!
//   customerType: String!
//   name: String!
//   website: String
//   address: Address
//   primaryContactPerson: ContactPerson
// }

// type Company {
//   id: String!
//   name: String!
//   taxId: String
//   taxIdType: TaxIdType
//   address: Address
//   website: String
// }

// type ConsumerCustomer {
//   id: String!
//   customerType: CustomerType!
//   firstName: String
//   lastName: String
//   address: Address
//   email: String
//   phone: String
// }

// type ContactPerson {
//   id: String!
//   firstName: String
//   lastName: String
//   address: Address
//   email: String
//   phone: String
// }

// enum CustomerType {
//   Consumer
//   Business
// }

// union Customer = ConsumerCustomer | BusinessCustomer

// type Invoice {
//   id: String!
//   customer: Customer!
//   invoiceNumber: String
//   invoiceDate: String
//   dueDate: String
//   amountDue: String
//   lineItems: [InvoiceLineItem]
// }

// type InvoiceLineItem {
//   lineNumber: Int!
//   itemName: String!
//   description: String
//   quantity: Float!
//   pricePerUnit: String!
// }

// enum TaxIdType {
//   SSN
//   EIN
// }

// type User {
//   id: String!
//   firstName: String!
//   lastName: String!
//   email: String!
//   cellPhone: String
//   workPhone: String
//   role: UserRole!
// }

// enum UserRole {
//   Admin
//   Manager
//   Bookkeeper
// }

// type Vendor {
//   id: String!
//   name: String
//   website: String
//   address: Address
//   primaryContactPerson: ContactPerson
// }