package com.bookstore;

import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;

import com.bookstore.config.HttpSessionConfig;

public class Initializer extends AbstractHttpSessionApplicationInitializer { 

	public Initializer() {
		super(HttpSessionConfig.class); 
	}
}
