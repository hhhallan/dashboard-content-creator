'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const InputHashtags = () => {
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [newHashtag, setNewHashtag] = useState('');

  const handleAddHashtag = () => {
    if (newHashtag.trim() && !hashtags.includes(newHashtag.trim())) {
      setHashtags([...hashtags, newHashtag.trim()]);
      setNewHashtag('');
    }
  };

  const handleRemoveHashtag = (tagToRemove: string) => {
    setHashtags(hashtags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-2">
      <Label>Hashtags</Label>
      <div className="flex space-x-2">
        <Input
          value={newHashtag}
          onChange={e => setNewHashtag(e.target.value)}
          placeholder="Ajouter un hashtag"
          onKeyPress={e => e.key === 'Enter' && handleAddHashtag()}
        />
        <Button type="button" onClick={handleAddHashtag} variant="outline">
          Ajouter
        </Button>
      </div>
      {hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {hashtags.map(tag => (
            <Badge
              key={tag}
              variant="secondary"
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleRemoveHashtag(tag)}
            >
              #{tag}
              <X className="h-3 w-3 cursor-pointer" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
