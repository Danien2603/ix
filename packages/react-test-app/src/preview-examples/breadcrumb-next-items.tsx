/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';
import React, { useEffect, useState } from 'react';

export const BreadcrumbNextItems: React.FC = () => {
  const [nextItems, setNextItems] = useState<string[]>([]);

  useEffect(() => {
    setNextItems(['Next Item 1']);
  }, [setNextItems]);

  return (
    <IxBreadcrumb nextItems={nextItems}>
      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};