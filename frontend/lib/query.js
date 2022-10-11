export const PRODUCT_QUERY = `query{
  products{
    data{
      attributes{
        description
        title
        slug
        price
               image{
          data{
            attributes{
            formats
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
query getProducts($slug:String!){
products(filters: {slug :{eq: $slug}}){
  data{
    attributes{
      title
      slug
      color
      description
      price
      image{
        data{
          attributes{
            formats
          }
        }
      }
    }
  }
}
}`;

export const GET_PRODUCTS_QUERY = `
query getProducts($type:String!){
  products(filters: {clothes_category: {type: {eq: $type}}}){
    data{
      attributes{
        title
        slug
        price
        image{
          data{
            attributes{
              formats
            }
          }
        }
        clothes_category{
          data{
            attributes{
            type
            }
          }
        }
      }
    }
  }
}`;
