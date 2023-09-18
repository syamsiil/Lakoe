// import {
//   Box,
//   Button,
//   Card,
//   CardBody,
//   Flex,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   Textarea,
// } from '@chakra-ui/react';
// import Dropzone from 'react-dropzone';
// import CloseCircle from '~/assets/icon-pack/button-icons/close-circle.svg';
// import GalleryAdd from '~/assets/icon-pack/button-icons/gallery-add.svg';
// // import useAddProduct from '../hooks/useAddProduct';
// import { useState } from 'react';

// export function ProductDetail() {
//   // const { preview } = useAddProduct();

//   const [photos, setPhotos] = useState([
//     { label: 'Foto Utama', name: 'mainPhoto', image: null },
//     // { label: 'Foto 2', name: 'photo2', image: null },
//     // { label: 'Foto 3', name: 'photo3', image: null },
//     // { label: 'Foto 4', name: 'photo4', image: null },
//     // { label: 'Foto 5', name: 'photo5', image: null },
//   ]);

//   const handleImageUpload = (name: string, image: any) => {
//     const updatedPhotos = photos.map((photo) => {
//       if (photo.name === name) {
//         return { ...photo, image };
//       }
//       return photo;
//     });
//     setPhotos(updatedPhotos);
//   };

//   const handleRemoveImage = (name: string) => {
//     const updatedPhotos = photos.map((photo) => {
//       if (photo.name === name) {
//         return { ...photo, image: null };
//       }
//       return photo;
//     });
//     setPhotos(updatedPhotos);
//   };

//   return (
//     <Card>
//       <CardBody>
//         <Heading size={'md'}>Detail Produk</Heading>
//         <Stack mt={7} spacing={4} mb={3}>
//           <FormControl isRequired>
//             <FormLabel>Deskripsi</FormLabel>
//             <Textarea
//               maxH={400}
//               minH={200}
//               placeholder="Masukan deskripsi lengkap produk kamu"
//               name="description"
//             />
//             <FormHelperText textAlign={'right'}>0/3000</FormHelperText>
//             {/* how to make the form helper text dynamic as we type? */}
//           </FormControl>

//           <Flex gap={2} align={'end'} overflowX={'auto'} pb={2}>
//             {photos.map((photo, index) => (
//               <FormControl isRequired key={index}>
//                 {photo.label === 'Foto Utama' && (
//                   <FormLabel>Foto Produk</FormLabel>
//                 )}
//                 <Dropzone
//                   onDrop={(acceptedFiles) => {
//                     handleImageUpload(photo.name, acceptedFiles[0]);
//                   }}
//                 >
//                   {({ getRootProps, getInputProps }) => (
//                     <section>
//                       <div {...getRootProps()}>
//                         <input
//                           // {...getInputProps()}
//                           name="image"
//                           type="file"
//                           accept="image/*"
//                         />

//                         {photo.image ? (
//                           <Flex
//                             direction={'column'}
//                             justify={'center'}
//                             align={'center'}
//                             gap={2}
//                             border={'1px'}
//                             borderRadius={'md'}
//                             borderColor={'gray.400'}
//                             w={'10em'}
//                             h={'10em'}
//                             position={'relative'}
//                           >
//                             <Button
//                               onClick={() => handleRemoveImage(photo.name)}
//                               size={'xs'}
//                               position={'absolute'}
//                               top={-2}
//                               right={-2}
//                               variant={'unstyled'}
//                               borderRadius={'full'}
//                             >
//                               <Image src={CloseCircle} />
//                             </Button>
//                             {photo.label === 'Foto Utama' && (
//                               <Box
//                                 position={'absolute'}
//                                 top={1}
//                                 left={1}
//                                 bgColor={'#E8C600'}
//                                 px={2}
//                                 py={1}
//                                 borderRadius={'md'}
//                               >
//                                 <Text fontSize={'xs'} fontWeight={'semibold'}>
//                                   Foto Utama
//                                 </Text>
//                               </Box>
//                             )}
//                             <Image
//                               src={
//                                 photo.image
//                                   ? URL.createObjectURL(photo.image)
//                                   : undefined
//                               }
//                               borderRadius={'md'}
//                               aspectRatio={'1 / 1'}
//                               objectFit={'cover'}
//                             />
//                           </Flex>
//                         ) : (
//                           <Flex
//                             direction={'column'}
//                             justify={'center'}
//                             align={'center'}
//                             gap={2}
//                             border={'1px'}
//                             p={10}
//                             borderRadius={'md'}
//                             borderColor={'gray.400'}
//                             borderStyle={'dashed'}
//                             w={'10em'}
//                             h={'10em'}
//                           >
//                             <Image src={GalleryAdd} />
//                             <Text
//                               textAlign={'center'}
//                               textColor={'gray.400'}
//                               fontSize={'sm'}
//                             >
//                               {photo.label}
//                             </Text>
//                           </Flex>
//                         )}
//                       </div>
//                     </section>
//                   )}
//                 </Dropzone>
//               </FormControl>
//             ))}
//           </Flex>
//         </Stack>
//       </CardBody>
//     </Card>
//   );
// }