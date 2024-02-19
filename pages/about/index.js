import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';

const About = () => {
  const {
    site,
    contact
  } = data;

  return (
    <PageLayout>
      <Head>
        <title>About | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-white text-2xl mb-10 title-page'>About</h1>
      <div className='container mx-auto text-white text-justify flex flex-col gap-4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu libero facilisis dolor dignissim vestibulum. Pellentesque at velit vel libero rhoncus suscipit non nec erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin nunc rhoncus urna fermentum auctor. Etiam sodales nunc quis tortor pretium, non tempor erat ultricies. Integer cursus, nisl eu sagittis rutrum, erat est porttitor turpis, eu elementum magna velit in ex. Proin fringilla consequat purus. Donec vestibulum mauris dui, ac cursus velit eleifend ac. Nullam commodo eget nisl quis bibendum. In blandit arcu eget nibh rutrum pretium.</p>

        <p>Phasellus nisi tellus, pellentesque nec porttitor at, accumsan in dui. Fusce posuere nunc at augue mollis, eu ornare velit lobortis. Suspendisse pharetra cursus eleifend. Phasellus eget ornare nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin non facilisis turpis. Maecenas porttitor ultrices orci, id tincidunt ligula pharetra vitae. Quisque dolor enim, venenatis cursus aliquam eget, faucibus sit amet dolor. Duis sed dolor ut magna dictum dictum. Cras nisl turpis, pharetra ac velit et, imperdiet congue dui. Etiam sed purus sem.</p>

        <p>Aliquam erat volutpat. Maecenas laoreet tellus et justo aliquet vehicula. Praesent sodales tortor non ligula fermentum, eleifend condimentum lacus consectetur. Ut posuere tempus vestibulum. Duis venenatis pharetra sapien, id egestas nisl luctus dictum. Quisque vitae ipsum in lorem ultricies aliquet. Maecenas vitae nisl semper, cursus odio id, ornare ipsum. Donec commodo metus sed lacus pharetra, in efficitur ipsum fermentum. Sed varius blandit ligula et commodo. Proin ornare ante pellentesque dapibus sollicitudin. Integer sagittis odio ultricies risus mollis gravida. Donec facilisis libero vel ultrices vestibulum. Donec feugiat turpis ut sapien eleifend, sed dapibus libero euismod. Proin in risus finibus, pharetra purus id, mollis leo.</p>

        <p>Donec sagittis dolor eu eros porttitor, quis suscipit diam pulvinar. Cras ullamcorper luctus cursus. Vestibulum et lobortis justo. Praesent aliquam ornare urna sed lobortis. Nulla volutpat nisi in elit cursus, a faucibus orci semper. Etiam dignissim eu tellus ac pellentesque. Morbi sit amet dapibus dui. Maecenas vestibulum mi at elementum tempus. Sed sit amet semper nibh, sed luctus ipsum. Nulla facilisi. Phasellus non maximus nisi. Donec pellentesque purus quis arcu vulputate ultrices. Vivamus a neque non tortor blandit ultricies quis ac purus. Proin pharetra dictum turpis et semper. Etiam consequat ipsum vel ipsum efficitur, id dapibus nisi finibus.</p>

        <p>Mauris justo massa, condimentum vel volutpat vestibulum, aliquet vitae sapien. Aenean eget ornare velit. Proin euismod maximus augue, vitae blandit leo consectetur non. Sed feugiat lorem orci. Phasellus porta ligula neque, nec viverra ex auctor sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eleifend maximus ante, vitae malesuada dolor. Proin placerat dictum nisl in gravida.</p>
      </div>
    </PageLayout>
  );
}
;

export default About; 
