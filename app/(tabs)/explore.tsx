import { Image, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { IconSymbol } from '@/components/ui/IconSymbol';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { createIconSet } from 'react-native-vector-icons';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import tw from "twrnc";
import { FullWindowOverlay } from 'react-native-screens';

const packageJson = require('../../package.json');
const version = packageJson.version || 'Versi tidak ditemukan';

export default function TabTwoScreen() {
  return (
    


    // <View style={styles.view}>
    //   <Image source={require('../../assets/images/kurangInpo.jpg')} style={styles.reactLogo}/>
    //   <View style={{marginLeft: 10, flex: 1}}>
    //   <Text style={styles.text}>Rasi Bintang </Text>
    //   <Text style={styles.text}>Kopi</Text>
    //   </View>
    //   <Text style={styles.ubah}>Ubah</Text>
    //   </View>
      
    //   <View style={{marginHorizontal:35}}>
    //   <Text style={styles.judulDetail}>Statistik</Text>
    //   <View>
    //   <View style={{flexDirection:'row', justifyContent:'space-between',  marginTop:10}}>
    //   <View style={{flexDirection:'row', alignItems:'center'}}>
    //   <View style={{padding: 20, backgroundColor: 'red', borderRadius: 100, width: 70, height: 70}}>
    //   <Entypo name='open-book' size={30} color={'white'} style={{alignItems:'center'}}/>
    //   </View>
    //   <View style={{marginLeft:10}}>
    //   <Text>10</Text>
    //   <Text>Lesson</Text>
    //   </View>
    //   </View>
      
    //   <View style={{flexDirection:'row', alignItems:'center'}}>
    //   <View style={{padding: 20, backgroundColor: 'red', borderRadius: 100, width: 70, height: 70}}>
    //   <Entypo name='flash' size={30} color={'white'} style={{alignItems:'center'}}/>
    //   </View>
    //   <View style={{marginLeft:10}}>
    //   <Text>20</Text>
    //   <Text>Streak</Text>
    //   </View>
    //   </View>
    //   </View>
    //   </View>
      
    //   <View>
    //   <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
    //   <View style={{flexDirection:'row', alignItems:'center'}}>
    //   <View style={{padding: 20, backgroundColor: 'red', borderRadius: 100, width: 70, height: 70}}>
    //   <Entypo name='star-outlined' size={30} color={'white'} style={{alignItems:'center'}}/>
    //   </View>
    //   <View style={{marginLeft:10}}>
    //   <Text>120</Text>
    //   <Text>XP</Text>
    //   </View>
    //   </View>
      
    //         <View style={{flexDirection:'row', alignItems:'center'}}>
    //         <View style={{padding: 20, backgroundColor: 'red', borderRadius: 100, width: 70, height: 70}}>
    //         <Foundation name='target' size={30} color={'white'} style={{alignItems:'center'}}/>
    //         </View>
    //         <View style={{marginLeft:10}}>
    //         <Text>70%</Text>
    //         <Text>Akurasi</Text>
    //         </View>
    //         </View>
    //         </View>
    //         </View>
            
    //         <Text style={styles.judulDetail}>Akun</Text>
    //         <View style={styles.detailView}>
    //         <Text style={styles.detail}>Detail Bisnis</Text>
    //       <Text>&gt;</Text>
    //       </View>
    //       <View style={styles.detailView}>
    //       <Text style={styles.detail}>Ubah Kata Sandi</Text>
    //       <Text>&gt;</Text>
    //       </View>
          
    //       <Text style={styles.judulDetail}>Tentang</Text>
    //       <View style={styles.detailView}>
    //       <Text style={styles.detail}>Keuntungan Belanja di Saraya</Text>
    //       <Text>&gt;</Text>
    //       </View>
    //       <View style={styles.detailView}>
    //       <Text style={styles.detail}>Syarat dan Ketentuan</Text>
    //       <Text>&gt;</Text>
    //       </View>
    //       <View style={styles.detailView}>
    //       <Text style={styles.detail}>Kebijakan Privasi</Text>
    //       <Text>&gt;</Text>
    //       </View>
    //       </View>

    
    
    
    
<GestureHandlerRootView>
  
<SafeAreaView>
  <ScrollView>

    <Text style={tw`text-bold text-3xl mt-6 ml-3`}>&lt;</Text>
    <View style={tw`justify-center items-center`}>

      <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`rounded-full w-50 h-50 my-10`}/>

      <Text style={tw`font-extrabold text-3xl`}>Rasi Bintang</Text>
      <Text style={tw`text-gray-500 text-xl`}>Perakit Roket NASA | Harian <AntDesign name='checkcircleo' color='blue'/></Text>

      <View style={tw`flex flex-row gap-3 my-5`}>
        <Link style={tw`bg-gray-300 p-2 rounded-2xl `} href="https://dribbble.com"><AntDesign size={24} color={'red'} name='dribbble' /></Link>
        <Link style={tw`bg-gray-300 p-2 rounded-2xl `} href="https://github.com/FadhlanPutra"><AntDesign size={24} name='github' /></Link>
        <Link style={tw`bg-gray-300 p-2 rounded-2xl `} href="https://instagram.com/fadhlanputra721"><AntDesign size={24} color={'#E1306C'} name='instagram' /></Link>
        <Link style={tw`bg-gray-300 p-2 rounded-2xl `} href="https://linkedin.com"><AntDesign size={24} color={'blue'} name='linkedin-square' /></Link>
      </View>

      <View style={tw`flex-row gap-18`}>
        <Text style={tw`font-extrabold text-2xl mr-1`}>542</Text>
        <Text style={tw`font-extrabold text-2xl`}>98K</Text>
        <Text style={tw`font-extrabold text-2xl`}>100K</Text>
      </View>

      <View style={tw`flex-row gap-12`}>
        <Text style={tw`text-xl`}>Posts</Text>
        <Text style={tw`text-xl ml-3`}>Followers</Text>
        <Text style={tw`text-xl ml-1`}>Following</Text>
      </View>

      <View style={tw`flex-row gap-5`}>
        <Link href="/settings/projects" style={tw`border-2 border-blue-500 p-4 rounded w-35 my-8`}>
          <Text style={tw`text-blue-500 font-bold text-center text-lg`}>Projects</Text>
        </Link>

        <Link href="/settings/siswa" style={tw`bg-blue-500 p-4 rounded w-35 my-8`}>
          <Text style={tw`text-white font-bold text-center text-lg`}>Siswa</Text>
        </Link>
      </View>

      <View style={tw`flex-row flex-wrap gap-y-5 w-full justify-between mt-3`}>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-30`}/>
            </View>
          </View>

      <Text style={tw`my-5`}>Versi APP: {packageJson.version}</Text>
    </View>

  </ScrollView>
</SafeAreaView>
</GestureHandlerRootView>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={
    //     <IconSymbol
    //       size={310}
    //       color="#808080"
    //       name="chevron.left.forwardslash.chevron.right"
    //       style={styles.headerImage}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Explore</ThemedText>
    //   </ThemedView>
    //   <ThemedText>This app includes example code to help you get started.</ThemedText>
    //   <Collapsible title="File-based routing">
    //     <ThemedText>
    //       This app has two screens:{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
    //     </ThemedText>
    //     <ThemedText>
    //       The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
    //       sets up the tab navigator.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/router/introduction">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Android, iOS, and web support">
    //     <ThemedText>
    //       You can open this project on Android, iOS, and the web. To open the web version, press{' '}
    //       <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
    //     </ThemedText>
    //   </Collapsible>
    //   <Collapsible title="Images">
    //     <ThemedText>
    //       For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
    //       different screen densities
    //     </ThemedText>
    //     <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
    //     <ExternalLink href="https://reactnative.dev/docs/images">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Custom fonts">
    //     <ThemedText>
    //       Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
    //       <ThemedText style={{ fontFamily: 'SpaceMono' }}>
    //         custom fonts such as this one.
    //       </ThemedText>
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Light and dark mode components">
    //     <ThemedText>
    //       This template has light and dark mode support. The{' '}
    //       <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
    //       what the user's current color scheme is, and so you can adjust UI colors accordingly.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Animations">
    //     <ThemedText>
    //       This template includes an example of an animated component. The{' '}
    //       <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
    //       the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
    //       library to create a waving hand animation.
    //     </ThemedText>
    //     {Platform.select({
    //       ios: (
    //         <ThemedText>
    //           The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
    //           component provides a parallax effect for the header image.
    //         </ThemedText>
    //       ),
    //     })}
    //   </Collapsible>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  view: {
    marginTop: 30,
    padding: 50,
    // display: 'flex',
    // flex: 3,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    justifyContent: 'center',
    height: 150,
    alignItems: 'center',
    backgroundColor: 'red', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30
  },
  reactLogo: {
    // marginRight: 10,
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  text: {
    color: 'white',
    fontSize: 17,
  },
  ubah: {
    textAlign: 'right',
    color: 'white',
    fontSize: 17,
  },
  judulDetail: {
    fontSize:24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    marginTop: 20,
    // color:'red', 
    // marginBottom:10
  },
  detailView: {
    justifyContent:'space-between', 
    flexDirection: 'row',
    marginRight: 5,
  },
  detail: {
    marginHorizontal: 10,
    fontSize: 17,
    // fontWeight: 'bold',
    // color: 'white',
    marginBottom: 10
  },
});
