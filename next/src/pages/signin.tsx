import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import GoogleSignInButton from '@/components/common/components/GoogleSignInButton';
import {HoverSx} from '@/components/chain/HoverSx';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign in | Daily Roast Chains</title>
        <meta name="robots" content="noindex"/>
      </Head>
      <Box className="flex-center" sx={{minHeight: '100svh', px: 2}}>
        <Card variant="outlined" sx={{...HoverSx, p: 4, width: 380, maxWidth: '100%'}}>
          <Box className="flex-center-nowrap" sx={{gap: 1, mb: 1}}>
            <LocalFireDepartmentRoundedIcon color="warning"/>
            <Typography variant="h5" component="h1">
              Daily Roast Chains
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" align="center" sx={{mb: 3}}>
            Sign in with Google. The tool opens for admin accounts only.
          </Typography>
          <GoogleSignInButton/>
        </Card>
      </Box>
    </>
  );
}
