'use client'
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;
}

const useSticky = (): StickyState => {
  // Désactive complètement le sticky header
  const sticky = false;

  return {
    sticky,
  };
};

export default useSticky;
