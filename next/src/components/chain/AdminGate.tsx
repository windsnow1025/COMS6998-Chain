import * as React from 'react';
import {useRouter} from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import {UserResDto, UserResDtoRolesEnum} from '@/client/nest';
import {StorageKeys} from '@/lib/common/Constants';
import UserLogic from '@/lib/common/user/UserLogic';
import {HoverSx} from './HoverSx';

export const ViewerContext = React.createContext<UserResDto | null>(null);

// Renders its children only for a signed-in admin: a visitor goes to the sign-in
// page, and a signed-in non-admin gets the denial.
export default function AdminGate({children}: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = React.useState<'loading' | 'denied' | 'ready'>('loading');
  const [viewer, setViewer] = React.useState<UserResDto | null>(null);

  React.useEffect(() => {
    if (!router.isReady) {
      return;
    }
    let active = true;
    const toSignIn = () => {
      router.replace(`/signin?redirect=${encodeURIComponent(router.asPath)}`);
    };
    const check = async () => {
      const userLogic = new UserLogic();
      let user: UserResDto | null | undefined;
      try {
        user = await userLogic.fetchUser();
      } catch {
        // The token did not authenticate
        user = null;
      }
      if (!active) {
        return;
      }
      if (!user) {
        toSignIn();
        return;
      }
      if (!user.roles?.includes(UserResDtoRolesEnum.Admin)) {
        setState('denied');
        return;
      }
      setViewer(user);
      setState('ready');
    };
    check();
    return () => {
      active = false;
    };
  }, [router]);

  if (state === 'loading') {
    return (
      <Box className="flex-center" sx={{minHeight: '60vh'}}>
        <CircularProgress/>
      </Box>
    );
  }

  if (state === 'denied') {
    return (
      <Box className="flex-center" sx={{minHeight: '60vh', px: 2}}>
        <Card variant="outlined" sx={{...HoverSx, p: 4, maxWidth: 420, textAlign: 'center'}}>
          <Typography variant="h6" gutterBottom>
            Access denied, admin required.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
            This account is signed in but has no admin role.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.removeItem(StorageKeys.Token);
              router.replace('/signin');
            }}
          >
            Sign in with another account
          </Button>
        </Card>
      </Box>
    );
  }

  return (
    <ViewerContext.Provider value={viewer}>
      {children}
    </ViewerContext.Provider>
  );
}
