'use client'
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// ******* Local Imports *******
import Loader from './components/lazyLoader';
import { persistor, store } from '@/redux/store';
import AuthGuard from './components/authGuard';


export default function App({ children }) {

  return (
    <>
      <div className='container max-w-[1440px] max-h-[1024px] h-full flex justify-center content-center'>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Suspense fallback={Loader}>
              <AuthGuard>
                {children}
              </AuthGuard>
            </Suspense>
          </PersistGate>
        </Provider>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
