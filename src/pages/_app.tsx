import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import store from '../../redux/store';
import { Provider  } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
     return (
       <Provider store={store}>
         <div>
           <Header />
           <Component {...pageProps} />
         </div>
       </Provider>
     );
}
