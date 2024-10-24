// ./src/components/Layout.tsx
'use client';
import React, { useEffect, useState } from "react";
import Header from "@src/components/header";
import Footer from "@src/components/footer";
import { db } from '@src/lib/db'
import error_banner from '@public/medias/error_banner.png'
import Loader from "./loader";

interface LayoutProps {
  loader?: boolean;
  children: React.ReactNode;
  className?: string;
  contentPadding: 'sm' | 'md' | 'xl' | 'none';
}

const Layout: React.FC<LayoutProps> = ({ children, className, contentPadding, loader }) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-8',
    xl: 'p-16',
    none: ''
  };

  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecord = async () => {
      setLoading(true);
      try {
        const fetchedRecord = await db.collection('AAA_Salter').getOne('5rvfqjgfrzqg33f');
        setStatus(fetchedRecord.status);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching record:', error);
      }
    };
    fetchRecord();
  }, []);

  return (
    <div className={className}>
      <Header />
      {status === false ? (
        <div>
        <picture>
          <img src={error_banner.src} alt="Error" />
        </picture>
        </div>
      ) : (
        <main className={paddingClasses[contentPadding]}>
          {loading && loader ? <Loader hideLayout={false} /> : children}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
