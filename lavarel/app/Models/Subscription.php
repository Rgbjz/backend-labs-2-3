<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Subscription extends Model
{
    protected $fillable = [
        'subscriber_id',
        'service',
        'topic',
        'payload',
        'expired_at'
    ];

    protected $casts = [
        'payload' => 'array',
        'expired_at' => 'datetime'
    ];

    public function subscriber(): BelongsTo
    {
        return $this->belongsTo(Subscriber::class);
    }
}