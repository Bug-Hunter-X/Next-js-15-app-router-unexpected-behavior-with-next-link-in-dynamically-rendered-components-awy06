```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default MyComponent; 
```