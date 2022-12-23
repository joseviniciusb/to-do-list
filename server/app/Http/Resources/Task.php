<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class Task extends JsonResource {
  public function toArray($request){
    //return parent::toArray($request);
    return [
      'id' => $this->id,
      'description' => $this->description,
      'date' => $this->date
    ];
  }

  /* public function with( $request ){
    return [
      'version' => '1.0.0',
      'author_url' => url('https://terminalroot.com.br')
    ];
  } */
}