export const getTitle = (path: string): string => {
  return path.substring(1, 2).toUpperCase() + path.substring(2);
};

export const validEmail = (e: any) => {
  var filter =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
};
