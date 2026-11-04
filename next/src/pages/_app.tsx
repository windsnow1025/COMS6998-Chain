import '../global.css';

import * as React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';

import AppTheme from "@/components/common/shared-theme/AppTheme";

import {useRouter} from "next/router";
import {usePathname} from "next/navigation";
import UserLogic from "@/lib/common/user/UserLogic";
import {StorageKeys} from "@/lib/common/Constants";
import {type Session, SessionProvider} from "@/session/SessionContext";

export default function App({Component, pageProps}: AppProps) {
  const [session, setSession] = React.useState<Session | null>(null);

  const router = useRouter();

  React.useEffect(() => {
    const fetchUser = async () => {
      const userLogic = new UserLogic();
      const user = await userLogic.fetchUser();
      if (!user) {
        return;
      }
      setSession({
        user: {
          name: user.username,
          email: user.email,
          image: user.avatar,
        }
      });
    };
    fetchUser();
  }, [router]);

  const pathname = usePathname();

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        router.push(`/signin?redirect=${encodeURIComponent(pathname!)}`);
      },
      signOut: () => {
        setSession(null);
        localStorage.removeItem(StorageKeys.Token);
        router.push(`/signin?redirect=${encodeURIComponent(pathname!)}`);
      },
    };
  }, [pathname, router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      <AppTheme>
        <CssBaseline enableColorScheme />
        <SessionProvider session={session} authentication={authentication}>
          <div className="local-scroll-root">
            <Component {...pageProps}/>
          </div>
        </SessionProvider>
      </AppTheme>
    </>
  );
}
