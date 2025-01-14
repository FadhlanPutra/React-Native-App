import { Image, ScrollView, Text, View } from 'react-native';
import tw from "twrnc";

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Siswa() {
    return(

        <SafeAreaView>
            <ScrollView>

                <Text style={tw`text-center font-extrabold text-4xl mx-5`}>Siswa RPL 2 😎😎</Text>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Ardhika Raditya Al{'\n'} Azizi Tumanggor</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/adaptive-icon.png')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/favicon.png')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/rusdi.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Fadhlan Putra{'\n'} Pamungkas</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/partial-react-logo.png')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Dayat</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/react-logo.png')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/Screenshot.png')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/splash-icon.png')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/rusdi.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang (ketua)</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>

                <View style={tw`flex-row justify-around`}>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                    <Link href="/settings/detail" style={tw`my-5`}>
                        <View style={tw`flex-col`}>
                            <Image source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-40 h-40 my-2 rounded-lg `}/>
                            <Text style={tw`text-center font-bold text-xl`}>Rasi Bintang</Text>
                        </View>
                    </Link>
                </View>



            </ScrollView>
        </SafeAreaView>

    )};