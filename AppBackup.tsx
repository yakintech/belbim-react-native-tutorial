import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductDetail from './src/axiosFetchSample/ProductDetail'
import OrdersScreen from './src/axiosFetchSample/OrdersScreen'


const AppBackup = () => {
  // https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000

  let bioData = {
    userImageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    name: "John",
    surname: "Doe",
    joinDate: "January 1, 2020",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }


  let productData = {
    productImageUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    productName: "Photon Camera X100",
    description: "The Photon Camera X100 is a state-of-the-art camera that captures stunning photos with its 50MP sensor and advanced image processing technology."
  }

  return <SafeAreaView>
    {/* <UserBio
      userImageUrl="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
      name="John"
      surname="Doe"
      joinDate="January 1, 2020"
      about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    /> */}

    {/* <UserBio
      userImageUrl={bioData.userImageUrl}
      name={bioData.name}
      surname={bioData.surname}
      joinDate={bioData.joinDate}
      about={bioData.about}
      isOnline={false}
    /> */}

    {/* <ProductDetail
      product={productData}
      onAddToCart={() => {
        Alert.alert("Product added to cart!")
      }}
    /> */}

    <OrdersScreen />


  </SafeAreaView>

}

export default AppBackup